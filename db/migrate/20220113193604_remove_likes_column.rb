class RemoveLikesColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :likes
  end
end
