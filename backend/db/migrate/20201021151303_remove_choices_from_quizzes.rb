class RemoveChoicesFromQuizzes < ActiveRecord::Migration[6.0]
  def change
    remove_column :quizzes, :choices, :string
  end
end
