class AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :update, :destroy]

  # GET /appointments
  def index
    @therapist = Therapist.find(params[:therapist_id])
    @appointments = Appointment.where(therapist_id: @therapist.id)

    render json: @appointments
  end

  # GET /appointments/1
  def show
    @therapist = Therapist.find(params[:therapist_id])
    @appointments = Appointment.find(params[:id])

    render json: @appointment
  end

  # POST /appointments
  def create
    @therapist = Therapist.find(params[:user_id])
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment, status: :created, location: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /appointments/1
  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /appointments/1
  def destroy
    @appointment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def appointment_params
      params.fetch(:appointment, {})
    end
end
