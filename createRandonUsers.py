#!/usr/bin/python
# -*- coding: utf-8 -*-
import json, random, math
def normal_distribution_with_range(func,start,stop,mu):
	index = (start+stop)/2
	a = int(func(index,1))
	if not (a >= start and a <= stop):
		return randomize_with_range(func,start,stop)
	else: 
		return a 

n = 10
gender = ['男','女']
age_group = ['19岁以下','20-29岁','30-39岁','40-49岁','50-59岁','60岁以上']
marrital_status = ['已婚','未婚']
province = [
	'海南省',
	'山西省',
	'青海省',
	'江苏省',
	'辽宁省',
	'吉林省',
	'台湾省',
	'河北省',
	'贵州省',
	'四川省',
	'北京市',
	'浙江省',
	'天津市',
	'安徽省',
	'上海市',
	'福建省',
	'重庆市',
	'江西省',
	'山东省',
	'河南省',
	'湖北省',
	'湖南省',
	'广东省',
	'云南省',
	'陕西省',
	'甘肃省',
	'黑龙江省',
	'香港特别行政区',
	'澳门特别行政区',
	'广西壮族自治区',
	'宁夏回族自治区',
	'新疆维吾尔自治区',
	'内蒙古自治区',
	'西藏自治区',
]
annual_income = ['3万以下','3-10万','10-24万','24万-50万','50-120万','120万以上']
customerinfo = []
f = open('customerinfo.json','w+')

for i in range(n):
	# index = randomize_with_range(random.normalvariate,0,5,2)
	user = {}
	user['gender'] = gender[random.randint(0,1)]
	user['age_group'] = age_group[normal_distribution_with_range(random.normalvariate,0,5,2)]
	user['marrital_status'] = marrital_status[random.randint(0,1)]
	user['province'] = province[normal_distribution_with_range(random.normalvariate,0,33,15)]
	user['annual_income'] = annual_income[normal_distribution_with_range(random.normalvariate,0,5,2)]
	print isinstance(user['gender'],str)
	customerinfo.append(user)
json.dump(customerinfo,f,ensure_ascii=False)



	