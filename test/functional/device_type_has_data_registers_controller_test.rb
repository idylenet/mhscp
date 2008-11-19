require 'test_helper'

class DeviceTypeHasDataRegistersControllerTest < ActionController::TestCase
  def test_should_get_index
    get :index
    assert_response :success
    assert_not_nil assigns(:device_type_has_data_registers)
  end

  def test_should_get_new
    get :new
    assert_response :success
  end

  def test_should_create_device_type_has_data_register
    assert_difference('DeviceTypeHasDataRegister.count') do
      post :create, :device_type_has_data_register => { }
    end

    assert_redirected_to device_type_has_data_register_path(assigns(:device_type_has_data_register))
  end

  def test_should_show_device_type_has_data_register
    get :show, :id => device_type_has_data_registers(:one).id
    assert_response :success
  end

  def test_should_get_edit
    get :edit, :id => device_type_has_data_registers(:one).id
    assert_response :success
  end

  def test_should_update_device_type_has_data_register
    put :update, :id => device_type_has_data_registers(:one).id, :device_type_has_data_register => { }
    assert_redirected_to device_type_has_data_register_path(assigns(:device_type_has_data_register))
  end

  def test_should_destroy_device_type_has_data_register
    assert_difference('DeviceTypeHasDataRegister.count', -1) do
      delete :destroy, :id => device_type_has_data_registers(:one).id
    end

    assert_redirected_to device_type_has_data_registers_path
  end
end
