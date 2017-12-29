class AddUuidToDashboards < ActiveRecord::Migration[5.1]
  def change
    add_column :dashboards, :uuid, :string
  end
end
