class MessagesController < ApplicationController
  def send
    
  end

  def recieve
    
  end
  
   def create  
     @message = Message.create!(params[:message])  
   end  
  
  def index
    @messages = Message.all  
  end

end
