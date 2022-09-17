class Service < ApplicationRecord
  belongs_to :worker
  
  validates :title, :desc, presence: true
end
