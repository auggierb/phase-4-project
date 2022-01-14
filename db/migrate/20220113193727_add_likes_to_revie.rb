class AddLikesToRevie < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :likes, :integer
  end
end
