require 'test_helper'

class DataRegistersControllerTest < ActionController::TestCase
  def test_should_get_index
    get :index
    assert_response :success
    assert_not_nil assigns(:data_registers)
  end

  def test_should_get_new
    get :new
    assert_response :success
  end

  def test_should_create_data_register
    assert_difference('DataRegister.count') do
      post :create, :data_register => { }
    end

    assert_redirected_to data_register_path(assigns(:data_register))
  end

  def test_should_show_data_register
    get :show, :id => data_registers(:one).id
    assert_response :success
  end

  def test_should_get_edit
    get :edit, :id => data_registers(:one).id
    assert_response :success
  end

  def test_should_update_data_register
    put :update, :id => data_registers(:one).id, :data_register => { }
    assert_redirected_to data_register_path(assigns(:data_register))
  end

  def test_should_destroy_data_register
    assert_difference('DataRegister.count', -1) do
      delete :destroy, :id => data_registers(:one).id
    end

    assert_redirected_to data_registers_path
  end
end
