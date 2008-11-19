require 'test_helper'

class DataRegisterLogsControllerTest < ActionController::TestCase
  def test_should_get_index
    get :index
    assert_response :success
    assert_not_nil assigns(:data_register_logs)
  end

  def test_should_get_new
    get :new
    assert_response :success
  end

  def test_should_create_data_register_log
    assert_difference('DataRegisterLog.count') do
      post :create, :data_register_log => { }
    end

    assert_redirected_to data_register_log_path(assigns(:data_register_log))
  end

  def test_should_show_data_register_log
    get :show, :id => data_register_logs(:one).id
    assert_response :success
  end

  def test_should_get_edit
    get :edit, :id => data_register_logs(:one).id
    assert_response :success
  end

  def test_should_update_data_register_log
    put :update, :id => data_register_logs(:one).id, :data_register_log => { }
    assert_redirected_to data_register_log_path(assigns(:data_register_log))
  end

  def test_should_destroy_data_register_log
    assert_difference('DataRegisterLog.count', -1) do
      delete :destroy, :id => data_register_logs(:one).id
    end

    assert_redirected_to data_register_logs_path
  end
end
