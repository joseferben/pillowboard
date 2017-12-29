class Dashboard < ApplicationRecord
  validates :name, presence: true
  validates :uuid, presence: true
  belongs_to :user
end
