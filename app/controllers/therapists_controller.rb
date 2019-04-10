class TherapistsController < ApplicationController
  before_action :set_therapist, only: [:show, :update, :destroy]

  # GET /therapists
  def index
    @therapists = Therapist.all

    render json: @therapists
  end

  # GET /therapists/1
  def show
    render json: @therapist
  end

  # POST /therapists
  def create
    @therapist = Therapist.new(therapist_params)

    if @therapist.save
      render json: @therapist, status: :created, location: @therapist
    else
      render json: @therapist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /therapists/1
  def update
    if @therapist.update(therapist_params)
      render json: @therapist
    else
      render json: @therapist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /therapists/1
  def destroy
    @therapist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_therapist
      @therapist = Therapist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def therapist_params
      params.require(:therapist).permit(
      :therapist_first_name,
      :therapist_last_name,
      :therapist_email,
      :therapist_password_digest,
      :therapist_image,
      :specialty,
      :location,
      :therapist_skype,
      :price)
    end
end
