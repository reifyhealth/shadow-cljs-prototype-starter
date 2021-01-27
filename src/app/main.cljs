(ns app.main
  (:require
   [reagent.core :as r :refer [atom]]
   ["picasso-pkg" :refer [Button message.info]]))

(defn app
  []
  [:div.padding-xl
   [:h1 "ClojureScript!"]
   [:> Button
    {:on-click
      #(message.info
        #js{:content "Boom!"
            :icon
            (r/as-element
              [:span.margin-right-sm "💥"])})}
    "Click me"]])

(defn mount []
  (r/render
   [app]
   (.getElementById
    js/document
    "app")))

(defn reload! []
  (println "App reloaded!")
  (mount))

(defn main! []
  (println "App loaded!")
  (mount))
