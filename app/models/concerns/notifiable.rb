module Notifiable
  extend ActiveSupport::Concern

  included do
    has_one :notification, as: :notifiable, dependent: :destroy
  end
end
