class AddScoreToQuiz < ActiveRecord::Migration[6.0]
  def change
    add_column :quizzes, :score, :integer
  end
end
