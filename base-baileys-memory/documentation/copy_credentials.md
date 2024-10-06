git clone https://github.com/sbocaccio/whatsapp-bot-hotel.git
rm -rf whatsapp-bot-hot/base-baileys-memory/saved_session/*
cp -r bot_sessions/* whatsapp-bot-hotel/base-baileys-memory/saved_session/
git add .
git config --global user.email "sbocaccio@dc.uba.ar"
git config --global user.name "sbocaccio"
git commit -m "Add credentials"
git push