require 'test_helper'

class DiariesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @diary = diaries(:one)
  end

  test "should get index" do
    get diaries_url, as: :json
    assert_response :success
  end

  test "should create diary" do
    assert_difference('Diary.count') do
      post diaries_url, params: { diary: { content: @diary.content, title: @diary.title } }, as: :json
    end

    assert_response 201
  end

  test "should show diary" do
    get diary_url(@diary), as: :json
    assert_response :success
  end

  test "should update diary" do
    patch diary_url(@diary), params: { diary: { content: @diary.content, title: @diary.title } }, as: :json
    assert_response 200
  end

  test "should destroy diary" do
    assert_difference('Diary.count', -1) do
      delete diary_url(@diary), as: :json
    end

    assert_response 204
  end
end
