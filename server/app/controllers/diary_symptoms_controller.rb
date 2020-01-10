class DiarySymptomsController < ApplicationController
  before_action :set_diary_symptom, only: [:show, :update, :destroy]

  # GET /diary_symptoms
  def index
    @diary_symptoms = DiarySymptom.all

    render json: @diary_symptoms
  end

  # GET /diary_symptoms/1
  def show
    render json: @diary_symptom
  end

  # POST /diary_symptoms
  def create
    @diary_symptom = DiarySymptom.new(diary_symptom_params)

    if @diary_symptom.save
      render json: @diary_symptom, status: :created, location: @diary_symptom
    else
      render json: @diary_symptom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /diary_symptoms/1
  def update
    if @diary_symptom.update(diary_symptom_params)
      render json: @diary_symptom
    else
      render json: @diary_symptom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /diary_symptoms/1
  def destroy
    @diary_symptom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_diary_symptom
      @diary_symptom = DiarySymptom.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def diary_symptom_params
      params.fetch(:diary_symptom, {})
    end
end
