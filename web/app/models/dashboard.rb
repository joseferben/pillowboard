class Dashboard < ApplicationRecord
  validates :name, presence: true,
            uniqueness: { case_sensitive: false }
  validates :uuid, presence: true,
            uniqueness: { case_sensitive: false }
  belongs_to :user
end
