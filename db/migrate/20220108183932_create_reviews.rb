class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :review
      t.boolean :on_my_list

      t.timestamps
    end
  end
end
