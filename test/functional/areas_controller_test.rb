require 'test_helper'

class AreasControllerTest < ActionController::TestCase
  def test_should_get_index
    get :index
    assert_response :success
    assert_not_nil assigns(:areas)
  end

  def test_should_get_new
    get :new
    assert_response :success
  end

  def test_should_create_area
    assert_difference('Area.count') do
      post :create, :area => { }
    end

    assert_redirected_to area_path(assigns(:area))
  end

  def test_should_show_area
    get :show, :id => areas(:one).id
    assert_response :success
  end

  def test_should_get_edit
    get :edit, :id => areas(:one).id
    assert_response :success
  end

  def test_should_update_area
    put :update, :id => areas(:one).id, :area => { }
    assert_redirected_to area_path(assigns(:area))
  end

  def test_should_destroy_area
    assert_difference('Area.count', -1) do
      delete :destroy, :id => areas(:one).id
    end

    assert_redirected_to areas_path
  end
end
