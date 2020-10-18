class QuizSerializer
  include FastJsonapi::ObjectSerializer
  attributes :question, :choices, :correct_choice, :topic_id, :topic
  belongs_to :topic
end
