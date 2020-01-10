require 'test_helper'

class SymptomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @symptom = symptoms(:one)
  end

  test "should get index" do
    get symptoms_url, as: :json
    assert_response :success
  end

  test "should create symptom" do
    assert_difference('Symptom.count') do
      post symptoms_url, params: { symptom: { description: @symptom.description, diary_id: @symptom.diary_id, name: @symptom.name, user_id: @symptom.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show symptom" do
    get symptom_url(@symptom), as: :json
    assert_response :success
  end

  test "should update symptom" do
    patch symptom_url(@symptom), params: { symptom: { description: @symptom.description, diary_id: @symptom.diary_id, name: @symptom.name, user_id: @symptom.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy symptom" do
    assert_difference('Symptom.count', -1) do
      delete symptom_url(@symptom), as: :json
    end

    assert_response 204
  end
end
