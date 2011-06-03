class MessagesController < ApplicationController
   
  def create  
     @message = Message.create!(params[:message])  
  end  
  
  def index
    @messages = Message.all
    render 'messages/index.html.erb'
  end

end
