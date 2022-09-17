class Worker < ApplicationRecord
  has_many :service, dependent: :destroy
  validates :title, presence: true
end
