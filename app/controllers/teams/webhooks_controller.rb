class Teams::WebhooksController < ApplicationController
  before_action :require_admin
  before_action :set_webhook, only: [:edit, :update, :destroy]

  def index
    @webhooks = Webhook.includes(:tag)
  end

  def new
    @form = WebhookForm.new(Webhook.new)
  end

  def create
    @form = WebhookForm.new(Webhook.new, webhook_params)

    if @form.save
      redirect_to teams_webhooks_path, notice: 'Webhook has been created'
    else
      render :new
    end
  end

  def edit
    @form = WebhookForm.new(@webhook)
  end

  def update
    @form = WebhookForm.new(@webhook, webhook_params)

    if @form.save
      redirect_to teams_webhooks_path, notice: 'Webhook has been updated'
    else
      render :edit
    end
  end

  def destroy
    @webhook.destroy
    redirect_to teams_webhooks_path, notice: 'Webhook has been destroyed'
  end

  private

  def webhook_params
    params.require(:webhook).permit(:type, :url, :channel, :on_comment, :on_post, :active, :tag_name)
  end

  def set_webhook
    @webhook = Webhook.find(params[:id])
  end
end
