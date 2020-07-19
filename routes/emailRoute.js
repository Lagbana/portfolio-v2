class EmailRoute {
  constructor (options = {}) {
    this.options = options
    this.router = options.Router
    this.EmailService = options.EmailService
  }

  initialize () {
    this.router.post('/email', (req, res) => this.sendEmail(req, res))
  }

  async sendEmail (req, res) {
    try {
      // const { userName, email, subject, message } = req.body
      console.log(req.body)
      const response = await this.EmailService(req.body)
      res.status(200).json('email sent successfully!')
    } catch (err) {
      res.status(404).json(err)
      throw err
    }
  }
}

module.exports = EmailRoute
