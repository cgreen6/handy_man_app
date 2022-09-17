class Comment < ApplicationRecord
  belongs_to :services

  validates :title, :price, presence: true
end
