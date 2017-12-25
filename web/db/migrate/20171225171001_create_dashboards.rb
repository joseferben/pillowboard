class CreateDashboards < ActiveRecord::Migration[5.1]
  def change
    create_table :dashboards, id: :uuid do |t|
      t.string :name
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :dashboards, [:user_id, :created_at]
  end
end
