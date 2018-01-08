class Teams::InvitationsController < ApplicationController
  before_action :require_admin
  before_action :set_user, only: [:update, :destroy]

  def index
    @users = User.pending
  end

  def new
    @user = User.new(password: SecureRandom.hex)
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to teams_invitations_path, notice: 'Invitation has been created'
    else
      render :new
    end
  end

  def update
    # Set updated_at to current time which has a role as invited_at
    @user.touch
    @user.send(:send_activation_needed_email!)
    redirect_to teams_invitations_path, notice: 'Invitation has been resent'
  end

  def destroy
    @user.destroy
    redirect_to teams_invitations_path, notice: 'Invitation has been destroyed'
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :role)
  end

  def set_user
    @user = User.pending.find(params[:id])
  end
end
