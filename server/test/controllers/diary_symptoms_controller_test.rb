require 'test_helper'

class DiarySymptomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @diary_symptom = diary_symptoms(:one)
  end

  test "should get index" do
    get diary_symptoms_url, as: :json
    assert_response :success
  end

  test "should create diary_symptom" do
    assert_difference('DiarySymptom.count') do
      post diary_symptoms_url, params: { diary_symptom: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show diary_symptom" do
    get diary_symptom_url(@diary_symptom), as: :json
    assert_response :success
  end

  test "should update diary_symptom" do
    patch diary_symptom_url(@diary_symptom), params: { diary_symptom: {  } }, as: :json
    assert_response 200
  end

  test "should destroy diary_symptom" do
    assert_difference('DiarySymptom.count', -1) do
      delete diary_symptom_url(@diary_symptom), as: :json
    end

    assert_response 204
  end
end
