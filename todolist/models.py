from django.db import models

# Create your models here.

class Task(models.Model):
	task_name = models.CharField(max_length=100, default = 'no task') 
	about_task = models.CharField(max_length=200, default = 'no task')
	pub_date = models.DateTimeField() 
	complete = models.BooleanField()
	
	def __str__(self):
		return self.task_name