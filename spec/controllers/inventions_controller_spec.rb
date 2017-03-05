require 'rails_helper'

RSpec.describe InventionsController, type: :controller do
  describe 'GET #index' do
    context 'html' do
      it 'returns http success' do
        get :index
        expect(response).to have_http_status(:success)
      end
    end

    context 'json' do
      let(:title) { 'maikoolInventshin' }
      let(:bit_name) { 'wowwhatabit' }
      let(:material_name) { 'andafinematerial' }
      let(:invention) do
        Invention.new(title: title).tap do |i|
          i.bits.build(name: bit_name)
          i.materials.build(name: material_name)
        end
      end

      it 'returns http success' do
        get :index, { format: :json }
        expect(response).to have_http_status(:success)
      end

      it 'returns inventions serialized as json' do
        invention.save!
        get :index, { format: :json }
        parsed = JSON.parse(response.body)
        expect(parsed.first['title']).to eq(title)
      end

      it 'includes serialized bits' do
        invention.save!
        get :index, { format: :json }
        parsed = JSON.parse(response.body)
        bit = parsed.first['bits'].first
        expect(bit['name']).to eq(bit_name)
      end

      it 'includes serialized materials' do
        invention.save!
        get :index, { format: :json }
        parsed = JSON.parse(response.body)
        material = parsed.first['materials'].first
        expect(material['name']).to eq(material_name)
      end
    end
  end
end
