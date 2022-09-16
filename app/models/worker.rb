class Worker < ApplicationRecord
  has_many :service, dependent: :destroy
end
