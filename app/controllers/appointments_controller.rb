class AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :update, :destroy]


  # GET /appointments
  def index
    if params[:therapist_id]
      @therapist = Therapist.find(params[:therapist_id])
      @appointments = Appointment.where(therapist_id: @therapist.id)
      render json: @appointments

    else params[:user_id]
      @user = Therapist.find(params[:user_id])
      @appointments = Appointment.where(user_id: @user.id)
      render json: @appointments
    end
  end

  # GET /appointments/1
  def show
    if params[:therapist_id]
      @therapist = Therapist.find(params[:therapist_id])
      @appointments = Appointment.find(params[:id])
      render json: @appointment

    else params[:user_id]
      @user = User.find(params[:user_id])
      @appointments = Appointment.find(params[:id])
      render json: @appointment
    end
  end

  # POST /appointments
  def create

    if params[:therapist_id]
      @therapist = Therapist.find(params[:therapist_id])
      @appointment = Appointment.create(appointment_params)
      if @appointment.save
        render json: @appointment, status: :created
      else
        render json: @appointment.errors, status: :unprocessable_entity
      end
    else params[:user_id]
      @user = User.find(params[:user_id])
      @appointment = Appointment.create(appointment_params)
      if @appointment.save
        render json: @appointment, status: :created, location: @appointment
      else
        render json: @appointment.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /appointments/1
  def update
    if params[:therapist_id]
      @therapist = Therapist.find(params[:therapist_id])
      @appointment = Appointment.find(params[:id])
      if @appointment.update_attributes(appointment_params)
        render json: @appointment
      else
        render json: @appointment.errors, status: :unprocessable_entity
      end
    else params[:user_id]
      @user = Therapist.find(params[:user_id])
      @appointment = Appointment.find(params[:id])
      if @appointment.update_attributes(appointment_params)
        render json: @appointment
      else
        render json: @appointment.errors, status: :unprocessable_entity
      end
    end
  end

  # DELETE /appointments/1
  def destroy
    if params[:therapist_id]
      @appointment.find(params[:id])
      @therapist = Therapist.find(params[:therapist_id])
      @appointment.destroy
      redirect_to therapist_appointments_path(@therapist)
    else params[:user_id]
      @user = User.find(params[:user_id])
      @appointment = Appointment.find(params[:id])
      @appointment.destroy
      redirect_to user_appointments_path(@user)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def appointment_params
      params.require(:appointment).permit(:date, :time, :therapist_first_name, :therapist_last_name, :therapist_image, :user_id, :therapist_id)
    end
end
