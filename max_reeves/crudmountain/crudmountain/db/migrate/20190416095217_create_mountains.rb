class CreateMountains < ActiveRecord::Migration[5.2]
  def change
    create_table :mountains do |t|
			t.text :name
			t.text :country
			t.text :image
			t.integer :height

			t.timestamps #created_at updated_at

    end
  end
end
