class AddLikesToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :likes, :integer 
  end
end
