import express from 'express'
import consign from 'consign'

const app = express()

consign()
	.include('libs/middlewares.js')
	.then('config/db.js')
	.then('models')
	.then('routes')
	.then('libs/boot.js')
	.into(app)