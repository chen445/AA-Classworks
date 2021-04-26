class FixUserIdInCatRentalRequests < ActiveRecord::Migration[5.2]
  def change
    remove_column :cat_rental_requests, :user_id
    add_column :cat_rental_requests, :user_id, :integer, null: false
    add_index :cat_rental_requests, :user_id
  end
end
