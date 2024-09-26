from turtle import *


#we want a paint a house
speed(10)
#step 1:draw a square
width(5)
color("brown")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door
forward(70)
color("black")
begin_fill()
left(90)
forward(100) #height of the door
right(90)
forward(60)
right(90)
forward(100)
end_fill()
#end door

penup()
goto(200,200)
pendown()
#roof
color("brown")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
#end roof

#window 1
penup()
goto(180,110)
pendown()
color("black")
begin_fill()
right(60)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()
#end

#window 2 
penup()
goto(70,110)
pendown()

color("black")
begin_fill()
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()
#end 

exitonclick()