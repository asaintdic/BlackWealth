class AddColumnToQuizzes < ActiveRecord::Migration[6.0]
  def change
    add_column :quizzes, :choices, :json
  end
end
