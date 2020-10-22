class AddCorrectChoiceToQuizzes < ActiveRecord::Migration[6.0]
  def change
    add_column :quizzes, :correct_choice, :json
  end
end
