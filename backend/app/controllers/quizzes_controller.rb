class QuizzesController < ApplicationController
  before_action :set_quiz, only: [:show, :update, :destroy]

 
  def index
    @quizzes = Quiz.all

    render json: QuizSerializer.new(@quizzes)
  end

 
  def show
    @quiz = Quiz.find(params[:id])
    
    render json: QuizSerializer.new(@quiz)
  end

  
  def create
    
    @quiz = Quiz.new(quiz_params)
    @quiz.score = 100
    if @quiz.save
      render json: QuizSerializer.new(@quiz)
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end


  private
   
    def set_quiz
      @quiz = Quiz.find(params[:id])
    end

   
    def quiz_params
      params.require(:quiz).permit(:name, :question, :choices, :correct_choice, :topic_id)
    end
end
