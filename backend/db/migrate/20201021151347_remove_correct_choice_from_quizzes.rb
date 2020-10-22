class RemoveCorrectChoiceFromQuizzes < ActiveRecord::Migration[6.0]
  def change
    remove_column :quizzes, :correct_choice, :string
  end
end
