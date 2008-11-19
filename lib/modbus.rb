### This is free software
### Placed in the public domain by Joachim Wuttke 2007

### auxiliary functions: 

class String 
  def to_int16 
    return self[0]*256 + self[1] 
  end 
end 

class Integer 
  def to_bytes 
    return (self >> 8).chr + (self & 0xFF).chr 
  end 
end

### class for communication with one modbus slave: 

class Modbus 
  
  @@transaction_num = 0 # a unique number (on class level ?) 
  
  attr_accessor :sock, :slave, :header, :ip_address, :port
  
  def initialize ipaddr, port, slaveaddr 
    @ip_address, @port = ipaddr, port
    @sock = open_socket ipaddr, port
    @slave = slaveaddr.chr 
  end 
  
  def open_socket ipaddr, port
    @sock = TCPSocket.open ipaddr, port 
  end
  
  def refresh_socket
    @sock = TCPSocket.open @ip_address, @port
  end
  
  ## transaction number
  def self.transaction_number
    @@transaction_num
  end
  
  ### modbus TCP encapsulation: 

  def send_pdu pdu ## encapsulate protocol_data_unit and send it to slave 
    @@transaction_num += 1 
    msg = build_msg pdu
    @sock.write msg 
  end 
  
  def build_msg pdu
    msg = @@transaction_num.to_bytes # transaction number 
    msg += "\000\000" # protocol identifier (always 0) 
    msg += (pdu.size+1).to_bytes # so many bytes will follow 
    msg += @slave # slave address 
    msg += pdu # protocol data unit
    return msg
  end

  def build_vfd_msg pdu
    # msg = 
  end

  def read_pdu ## receive message from slave and extract pdu 
    header = @header = @sock.read(7) # read TCP header 
    tin = header[0,2].to_int16 # raise "transaction number mismatch: response: #{tin}, trans_num: #{@@transaction_num}" unless tin == @@transaction_num
    len = header[4,2].to_int16 # length of remaining message 
    pdu = @sock.read len-1 # read remaining message 
    return pdu 
  end 
  
  def query pdu ## send pdu to slave and receive response 
    send_pdu pdu 
    return read_pdu 
  end ### modbus functions:
  
  def query_holding( addr, nreg ) ## query contents of holding registers 
    pdu = query(build_query_holding_pdu(addr, nreg))
    return pdu[2..-1] 
  end # ... and so on ... 
  
  def query_holding_raw (addr, nreg)
    req_pdu = build_query_holding_pdu addr, nreg
    pdu = query req_pdu
    return pdu
  end
  
  def build_query_holding_pdu (addr, nreg)
      pdu = "\003" + addr.to_bytes + nreg.to_bytes 
      return pdu
  end

end

### usage in main program: # connect once: modbus = Modbus.new "129.187.1.1", 502, 1 # interact with slave: puts modbus.query_holding 12, 4 # print contents of registers 12..15
