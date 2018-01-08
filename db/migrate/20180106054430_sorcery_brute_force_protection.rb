class SorceryBruteForceProtection < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :failed_logins_count, :integer, default: 0
    add_column :users, :lock_expires_at, :datetime, default: nil
    add_column :users, :unlock_token, :string, default: nil
    add_index :users, :unlock_token
  end
end
