class CreateMessages < ActiveRecord::Migration
  def self.up
    create_table :messages do |t|
      t.text :content
      t.string :sender
      t.string :recipient

      t.timestamps
    end
  end

  def self.down
    drop_table :messages
  end
end
