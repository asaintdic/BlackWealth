class TopicSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :section, :title, :body, :contributor, :url, :quizzes
  has_many :quizzes
end
