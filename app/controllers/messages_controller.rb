class MessagesController < ApplicationController
  before_filter :authenticate_user!
  def create  
     @message = Message.create!(params[:message])  
  end  
  
  def index
    @messages = Message.all
    render 'messages/index.html.erb'
  end

end
