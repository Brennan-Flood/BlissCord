@users.each do |user| 
  @profile_icon = user.profile_icon
  json.set! user.id do
    json.partial! 'api/users/user', user: user
    json.set! :profile_icon do
    json.partial! '/api/profile_icons/profile_icon', profile_icon: @profile_icon
    end
    end
end

