#!/usr/bin/python
# -*- coding: utf-8 -*-
import json, random, math
def normal_distribution_with_range(func,start,stop,mu):
	# def randomize_with_range(func, start, stop):
		# return func(start,stop)
	index = (start+stop)/2
	a = int(func(index,mu))
	if not (a >= start and a <= stop):
		return normal_distribution_with_range(func,start,stop,mu)
	else: 
		return a 

n = 1000
gender = ['男','女']
age_group = ['19岁以下','20-29岁','30-39岁','40-49岁','50-59岁','60岁以上']
marrital_status = ['已婚','未婚']
province = [
	'海南',
	'山西',
	'青海',
	'辽宁',
	'吉林',
	'台湾',
	'河北',
	'贵州',
	'四川',
	'北京',
	'天津',
	'安徽',
	'上海',
	'江苏',
	'福建',
	'浙江',
	'江西',
	'山东',
	'河南',
	'湖北',
	'湖南',
	'广东',
	'云南',
	'陕西',
	'甘肃',
	'重庆',
	'黑龙江',
	'香港',
	'澳门',
	'广西',
	'宁夏',
	'新疆',
	'内蒙古',
	'西藏',
]
annual_income = ['3万以下','3-10万','10-24万','24万-50万','50-120万','120万以上']
customerinfo = []
f = open('json/customerinfo1000.json','w+')

for i in range(n):
	# index = randomize_with_range(random.normalvariate,0,5,2)
	user = {}
	user['gender'] = gender[random.randint(0,1)]
	user['age_group'] = age_group[normal_distribution_with_range(random.normalvariate,0,5,2)]
	user['marrital_status'] = marrital_status[random.randint(0,1)]
	user['province'] = province[normal_distribution_with_range(random.normalvariate,0,33,10)]
	user['annual_income'] = annual_income[normal_distribution_with_range(random.normalvariate,0,5,2)]
	print normal_distribution_with_range(random.normalvariate,0,33,10)
	customerinfo.append(user)
json.dump(customerinfo,f,ensure_ascii=False)



	