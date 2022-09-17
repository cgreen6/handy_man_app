Service.delete_all
Comment.delete_all
Worker.delete_all 

3.times do 
  worker = Worker.create(
    title: Faker::Hobby.activity,
    desc: Faker::Lorem.paragraph
  )

  3.times do 
    service = Service.create(
      title: Faker::Food.fruits,
      complete: Faker::Boolean.boolean,
      rating: 3,
      price: 0.0,
      list_id: list.id
    )

    comment = Comment.create(
      subject: Faker::Superhero.power,
      body: Faker::Lorem.paragraph,
      todo_id: todo.id
    )
  end
end

puts "Workers ##{Worker.count}"
puts "Services ##{Service.count}"
puts "Comments ##{Comment.count}"