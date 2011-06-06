module MessagesHelper
  def broadcast(channel, &block)  
     message = {:channel => channel, :data => capture(&block), :ext => {:auth_token => FAYE_TOKEN}}  
     uri = URI.parse("http://localhost:8000/faye")  
     Net::HTTP.post_form(uri, :message => message.to_json)  
   end  
end
