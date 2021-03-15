(ns app.colors
  (:require
    [clojure.string :as str]
    [ajax.core :refer [GET POST]]
    [reagent.core :as r :refer [atom]]
    ["antd" :refer [Typography.Text Card Space]]))

(def state (atom {:brand-colors nil}))

(defn handler [response]
  (.log js/console (str response))
  (swap! state assoc :brand-colors response))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "Error: " status " " status-text)))

(def all-records (GET "/colors.json" {:handler handler
                                      :error-handler error-handler
                                      :response-format :json
                                      :keywords? true}))

(defn ColorsComponent
  []
  (let [{:keys [brand-colors]} @state
        {:keys [primary secondary variables]} brand-colors]
   [:div.c-ColorsComponent
    ; Primary
    (for [color primary]
      (let [{:keys [name title color]} color]
        [:div.c-ColorsComponent__color {:key name}
          [:div.c-ColorsComponent__color__swatch
           {:style {:background color}}]
          [:> Space {:direction :vertical}
           [:> Typography.Text {:strong true} title]
           [:> Typography.Text {:code true :copyable true} name]
           [:> Typography.Text {:code true :copyable true} color]]]))
    ; Secondary
    (for [color secondary]
      (let [{:keys [name title color]} color]
        [:div.c-ColorsComponent__color {:key name}
          [:div.c-ColorsComponent__color__swatch
           {:style {:background color}}]
          [:> Space {:direction :vertical}
           [:> Typography.Text {:strong true} title]
           [:> Typography.Text {:code true :copyable true} name]
           [:> Typography.Text {:code true :copyable true} color]]]))

    ; Available UI Colors   
    (for [color variables]
      (let [{:keys [name value compiledValue]} color]
        [:div.c-ColorsComponent__color {:key name}
          [:div.c-ColorsComponent__color__swatch
           {:style {:background compiledValue}}]
          [:> Space {:direction :vertical}
           [:> Typography.Text {:code true :copyable true} name]
           [:> Typography.Text {:code true :copyable true} compiledValue]]]))]))
